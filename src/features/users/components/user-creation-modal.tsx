"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Save, X } from "lucide-react";
import { useCreateUser } from "../hooks/UseUserHooks";
import { CreateUserFormData, createUserSchema } from "../schemas/userSchemas";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserRole, Sex } from "@/lib/enums";

interface UserCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserCreationModal({ isOpen, onClose }: UserCreationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.PATIENT);
  const { mutateAsync: createUser } = useCreateUser();

  const form = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      role: UserRole.PATIENT,
      patient_profile: {
        national_id: "",
        date_of_birth: "",
        sex: Sex.MALE,
      },
      doctor_profile: {
        license_no: "",
        specialty: "",
        institution: "",
      },
    },
  });

  const onSubmit = async (data: CreateUserFormData) => {
    try {
      setIsSubmitting(true);
      await createUser(data);
      form.reset(); // Reset form after successful creation
      onClose(); // Close modal after successful creation
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when modal opens
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      form.reset();
      onClose();
    }
  };
  // Handle role change to show relevant fields
  const handleRoleChange = (role: UserRole) => {
    setSelectedRole(role);
    form.setValue("role", role);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px]">      <DialogHeader>
        <DialogTitle>Create New User</DialogTitle>
        <DialogDescription>Fill out the form below to create a new user account</DialogDescription>
      </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Basic User Information */}
              <div className="space-y-4">                <h3 className="text-lg font-medium">Basic Information</h3>

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
                />                <FormField
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
                />                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone number (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={handleRoleChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="patient">Patient</SelectItem>
                          <SelectItem value="customer">Customer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Profile Information Based on Role */}
              <div className="space-y-4">                {selectedRole === UserRole.PATIENT && (
                <>
                  <h3 className="text-lg font-medium">Patient Information</h3>

                  <FormField
                    control={form.control}
                    name="patient_profile.national_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>National ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter national ID" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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

                  <FormField
                    control={form.control}
                    name="patient_profile.sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sex</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select sex" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="M">Male</SelectItem>
                            <SelectItem value="F">Female</SelectItem>
                            <SelectItem value="O">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
                {selectedRole === UserRole.DOCTOR && (
                  <>
                    <h3 className="text-lg font-medium">Doctor Information</h3>

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
                            <Input placeholder="Enter medical specialty" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="doctor_profile.institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institution</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter medical institution" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => handleOpenChange(false)}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                <Save className="mr-2 h-4 w-4" />
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog >
  );
}
