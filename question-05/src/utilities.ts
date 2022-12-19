var utilities = {
  validateNpi: (npiNumber: string) => {
    if (npiNumber.length < 10) {
      return false;
    }

    if (npiNumber.length > 10) {
      return false;
    }

    const zeroCharCode = "0".charCodeAt(0);
    const nineCharCode = "9".charCodeAt(0);
    const length = npiNumber.length;

    for (let i = 0; i < length; i += 1) {
      const d = npiNumber.charCodeAt(i);
      if (d < zeroCharCode || d > nineCharCode) {
        return false;
      }
    }

    return true;
  },
};

export default utilities;
