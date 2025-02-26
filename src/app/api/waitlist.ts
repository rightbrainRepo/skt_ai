export const submitEmail = async (email: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryString = searchParams.toString();
    const formKey = process.env.NEXT_PUBLIC_WAITLIST_FORM_KEY
    const url = `https://getlaunchlist.com/s/${formKey}${queryString ? '?' + queryString : ''}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ email }).toString(),
        });

        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}
