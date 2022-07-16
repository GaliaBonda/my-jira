export default interface ITicket {
    // completed: boolean;
    id: number;
    status: string;
    title: string;
    userId: number;
    userName: {
        name: string;
        surname: string;
    };
    color: string;
};