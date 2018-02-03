export default function statusHandle(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}
