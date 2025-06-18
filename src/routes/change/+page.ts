export const load = ({ url }) => {
    const id = url.searchParams.get('id');
    const title = url.searchParams.get('title');
    const description = url.searchParams.get('description');

    console.log(title);
    console.log(description);

    return { 
            id: id,
            title: title,
            description: description
            }
}