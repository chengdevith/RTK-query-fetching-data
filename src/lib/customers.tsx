export type CustomerResponse = {
  fullName: string;
  gender: string;
  email: string;
};

export type CreateCustomerType = {
  fullName: string;
  email: string;
  gender: string;
  dob: number;
  phoneNumber: string;
  remark: string;
  segmentType: string;
  nationalCardId: string;
};

export type UpdateCustomerType = {
  fullName: string;
  gender: string;
  remark: string;
  phoneNumber: string;
};
