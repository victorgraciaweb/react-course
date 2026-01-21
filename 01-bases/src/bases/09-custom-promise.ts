export const getData = (url: string) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve('ACTIVE');
        }, 2000);
    });
};