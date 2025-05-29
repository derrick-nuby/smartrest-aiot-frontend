"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { UserRole } from "@/lib/enums";
import { UpdateUserFormData, updateUserSchema } from "../schemas/userSchemas";
import { useUser, useUpdateUser } from "../hooks/UseUserHooks";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

interface UserEditModalProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function UserEditModal({ userId, isOpen, onClose }: UserEditModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: user, isLoading, error } = useUser(userId);
  const { mutateAsync: updateUser } = useUpdateUser(userId);

  const form = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      role: UserRole.PATIENT,
    },
  });

  // Update form when user data is loaded
  useEffect(() => {
    if (user) {
      form.reset({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone || "",
        role: user.role as UserRole,
      });
    }
  }, [user, form]);

  const onSubmit = async (data: UpdateUserFormData) => {
    try {
      setIsSubmitting(true);
      await updateUser(data);
      onClose(); // Close modal after successful update
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <Skeleton className="h-6 w-40" />
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (error || !user) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Error</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Failed to load user data. Please try again later.</p>
          </div>
          <DialogFooter>
            <Button onClick={onClose}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  const selectedRole = form.watch('role');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Update user information for &quot;{user.first_name} {user.last_name}&quot;</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4 py-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email address" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                        <SelectItem value={UserRole.DOCTOR}>Doctor</SelectItem>
                        <SelectItem value={UserRole.PATIENT}>Patient</SelectItem>
                        <SelectItem value={UserRole.CUSTOMER}>Customer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {selectedRole === UserRole.DOCTOR && (
                <>
                  <FormField
                    control={form.control}
                    name="doctor_profile.license_no"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>License Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter license number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="doctor_profile.specialty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specialty</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter specialty" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {selectedRole === UserRole.PATIENT && (
                <>
                  <FormField
                    control={form.control}
                    name="patient_profile.date_of_birth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" type="button" onClick={onClose}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update User"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
