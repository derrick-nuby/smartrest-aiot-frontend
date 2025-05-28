"use client";

import { useState, useCallback, useMemo } from "react";
import { RefreshCw } from "lucide-react";
import { MRT_ColumnDef, MRT_ColumnFiltersState, MRT_PaginationState, MRT_SortingState, useMantineReactTable, MantineReactTable } from "mantine-react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUsers } from "../hooks/UseUserHooks";
import { User } from "../types/UserTypes";
import { UserActionButtons } from "./user-action-buttons";
import { UserCreationModal } from "./user-creation-modal";
import { UserEditModal } from "./user-edit-modal";
import { UserDeleteDialog } from "./user-delete-dialog";
import { UserRole } from "@/lib/enums";

export function UserTable() {
  const [page, setPage] = useState(1);
  const { data: usersResponse, isLoading, error, refetch } = useUsers(page);
  const [isRefetching, setIsRefetching] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>(undefined);

  // Table state
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  // Handle pagination from API
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePaginationChange = (updater: any) => {
    const newPagination = updater instanceof Function ? updater(pagination) : updater;
    setPagination(newPagination);
    setPage(newPagination.pageIndex + 1);
  };

  const handleRefresh = async () => {
    setIsRefetching(true);
    await refetch();
    setIsRefetching(false);
  };

  const handleEdit = useCallback((userId: string) => {
    setSelectedUserId(userId);
    setShowEditModal(true);
  }, []);

  const handleDelete = useCallback((userId: string) => {
    setSelectedUserId(userId);
    setShowDeleteDialog(true);
  }, []);
  const getRoleBadge = useCallback((role: string) => {
    switch (role.toLowerCase()) {
      case UserRole.ADMIN:
        return <Badge className="bg-purple-500 text-white">Admin</Badge>;
      case UserRole.DOCTOR:
        return <Badge className="bg-blue-500 text-white">Doctor</Badge>;
      case UserRole.PATIENT:
        return <Badge className="bg-green-500 text-white">Patient</Badge>;
      case UserRole.CUSTOMER:
        return <Badge className="bg-amber-500 text-white">Customer</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  }, []);

  const formatDate = (date: string | null | undefined) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString();
  };
  // Define columns for Mantine React Table
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "first_name",
        header: "First Name",
        size: 150,
        filterVariant: "text",
        Cell: ({ row }) => <div className="font-medium">{row.original.first_name}</div>,
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
        size: 150,
        filterVariant: "text",
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
        filterVariant: "text",
        Cell: ({ row }) => (
          <a
            href={`mailto:${row.original.email}`}
            className="hover:underline text-blue-500 max-w-[200px] truncate block"
          >
            {row.original.email}
          </a>
        ),
      },
      {
        accessorKey: "phone",
        header: "Phone",
        size: 150,
        filterVariant: "text",
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 120,
        filterVariant: "select",
        filterSelectOptions: ["admin", "doctor", "patient", "customer"],
        Cell: ({ row }) => getRoleBadge(row.original.role as string),
      },
      {
        accessorKey: "email_verified_at",
        header: "Verified",
        size: 120,
        filterVariant: "date",
        Cell: ({ row }) => row.original.email_verified_at ?
          <Badge className="bg-green-500 text-white">Yes</Badge> :
          <Badge variant="outline" className="border-amber-500 text-amber-500">No</Badge>,
      },
      {
        accessorKey: "created_at",
        header: "Created At",
        size: 150,
        filterVariant: "date",
        Cell: ({ row }) => formatDate(row.original.created_at),
      },
      {
        id: "actions",
        header: "Actions",
        size: 100,
        enableSorting: false,
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <UserActionButtons userId={row.original.user_id} onEdit={handleEdit} onDelete={handleDelete} />
        ),
      },
    ],
    [getRoleBadge, handleEdit, handleDelete],
  );

  const table = useMantineReactTable({
    columns,
    data: usersResponse?.data || [],
    enableColumnFilters: true,
    enableColumnOrdering: false,
    enableSorting: true,
    enablePagination: true,
    enableColumnResizing: false,
    enableRowSelection: false,
    enableGlobalFilter: true,
    enableDensityToggle: true,
    enableFullScreenToggle: true,
    enableColumnActions: true,
    enableHiding: true,
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    rowCount: usersResponse?.total || 0,
    mantineTableProps: {
      withBorder: true,
      withColumnBorders: true,
      highlightOnHover: true,
    },
    mantineTableBodyCellProps: {
      align: "left",
    },
    mantineTableHeadCellProps: {
      align: "left",
    },
    state: {
      isLoading,
      showProgressBars: isRefetching,
      columnFilters,
      pagination,
      sorting,
    },
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: handlePaginationChange,
    onSortingChange: setSorting,
    mantinePaginationProps: {
      showRowsPerPage: true,
    }, renderTopToolbarCustomActions: () => (
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefetching}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
        <Button size="sm" onClick={() => setShowCreateModal(true)}>
          Create User
        </Button>
      </div>
    ),
  });
  if (error) {
    return (
      <div className="space-y-4 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Management</h2>
          <Button onClick={() => setShowCreateModal(true)}>
            Create User
          </Button>
        </div>
        <div className="bg-background border border-border rounded-md p-6 text-center">
          <p className="text-muted-foreground">An error occurred while loading users. Please try again.</p>
          <Button variant="outline" className="mt-4" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
        <UserCreationModal isOpen={showCreateModal} onClose={() => setShowCreateModal(false)} />
      </div>
    );
  }
  return (
    <>
      <div className="space-y-8 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Management</h2>
        </div>

        <div className="rounded-md border border-border p-4">
          <MantineReactTable table={table} />
        </div>
      </div>

      {/* Create User Modal */}
      <UserCreationModal isOpen={showCreateModal} onClose={() => setShowCreateModal(false)} />

      {/* Edit Modal */}
      {selectedUserId && (
        <UserEditModal
          userId={selectedUserId}
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {selectedUserId && (
        <UserDeleteDialog
          userId={selectedUserId}
          isOpen={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}
        />
      )}
    </>
  );
}
