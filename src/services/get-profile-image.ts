export async function getProfileImage(
    profileID: string,
    imageName: string,
    imageExtension: string
) {
    if (
        profileID === undefined ||
        imageName === undefined ||
        imageExtension === undefined
    ) {
        return null;
    }
    return await require('data/profile/' +
        profileID +
        '/' +
        imageName +
        '.' +
        imageExtension);
}
