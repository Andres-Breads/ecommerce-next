import { ENV, authFetch } from "@/utils";

export class Address {
    async create(data: any, userId: number) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: {
                        ...data,
                        user: userId,
                    }
                }),
            }

            const response = await authFetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error
        }
    }
}