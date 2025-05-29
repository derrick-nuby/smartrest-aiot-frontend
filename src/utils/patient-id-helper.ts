// Helper function to get patient ID from localStorage
export const getPatientIdFromStorage = (userRole?: string): string => {
  try {
    const userData = localStorage.getItem("userData");

    if (userData) {
      const user = JSON.parse(userData);
      return user.id || `${userRole || 'patient'}-default`;
    }

    // Fallback based on user role
    switch (userRole) {
      case 'admin':
        return 'all-patients';
      case 'doctor':
        return 'all-patients';
      case 'patient':
        return 'patient-default';
      default:
        return 'patient-default';
    }
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return `${userRole || 'patient'}-default`;
  }
};

// Helper function to get current user role
export const getUserRoleFromStorage = (): string => {
  try {
    const userRole = localStorage.getItem("userRole");
    if (userRole) {
      return userRole;
    }

    const userData = localStorage.getItem("userData");
    if (userData) {
      const user = JSON.parse(userData);
      return user.role || 'patient';
    }

    return 'patient';
  } catch (error) {
    console.error("Error getting user role from localStorage:", error);
    return 'patient';
  }
};
