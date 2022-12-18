var utilities = {
    validateNPI: (npiNumber: string) => {
        if (npiNumber.length < 10) {
            return false;
        }

        return true;
    }
}

export default utilities;
