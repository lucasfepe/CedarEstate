// composables/useContact.ts
export const useContact = () => {
    // Simple ROT13 cipher for basic obfuscation
    const rot13 = (str: string): string => {
        return str.replace(/[a-zA-Z]/g, (char) => {
            const start = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
        });
    };

    // Simple number obfuscation - shift each digit by 5 (with wrapping)
    const shiftNumbers = (str: string, decode: boolean = false): string => {
        return str.replace(/\d/g, (digit) => {
            const num = parseInt(digit);
            const shifted = decode ? (num + 5) % 10 : (num + 10 - 5) % 10;
            return shifted.toString();
        });
    };

    // Encoded contact info
    const encodedEmail = 'gurprqnefrfgngr@tznvy.pbz'; // thecedarsestate@gmail.com (ROT13 encoded)
    const encodedPhone = '961-349-5776'; // 416-894-0221 (number shifted by 5)

    const decodeEmail = (): string => {
        return rot13(encodedEmail);
    };

    const decodePhone = (): string => {
        return shiftNumbers(encodedPhone, true);
    };

    const revealEmail = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        target.textContent = decodeEmail();
        target.removeEventListener('click', revealEmail);
    };

    const revealPhone = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        target.textContent = decodePhone();
        target.removeEventListener('click', revealPhone);
    };

    return {
        revealEmail,
        revealPhone,
        getObfuscatedEmail: () => 'Click to reveal email',
        getObfuscatedPhone: () => 'Click to reveal phone'
    };
};