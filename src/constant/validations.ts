export const regex = {
  password: {
    pattern: /^(?=.*[A-Za-z0-9!@#$&()\\-`.+,/"])[\w\W]{6,}$/,
    message: 'Password must be at least 8 characters long.'
  },
  email: {
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email is incorrect'
  },
  phone: {
    pattern:
      /^(\+38)?\s*\(?0?(\d{2,3})\)?[\s.-]*\d{3}[\s.-]*\d{2}[\s.-]*\d{2}$/,
    message: 'Phone number is incorrect'
  },
  url: {
    pattern:
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/,
    message: 'Invalid URL'
  },
  parent: /^(?=.*[A-Za-z0-9!@#$&()\\-`.+,/"])[\w\W]{6,}$/,
  fullName: {
    pattern: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    message: 'Fullname is incorrect'
  }
};

export const maxContent = (length: number, field: string) => {
  return `${field} should have max ${length} characters`;
};

export const minContent = (length: number, field: string) => {
  return `${field} should have min ${length} characters`;
};

export const requiredFiled = (field: string) => {
  return `${field} is required`;
};
