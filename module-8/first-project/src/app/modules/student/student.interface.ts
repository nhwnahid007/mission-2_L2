export type Guardian = {
  fatherName: string;
  fatherContactNo: string;
  fatherOccupation: string;
  motherName: string;
  motherContactNo: string;
  motherOccupation: string;
};

export type LocalGuardian = {
  name: string;
  contactNo: string;
  address: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

// type alias
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBith: string;
  email: string;
  contactNo: string;
  emergencyContactNO: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; // union string literal type
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
