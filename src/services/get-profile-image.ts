import axios from 'axios';

export async function getProfileImage({
    profileID,
    imageName,
    imageExtension,
}: {
    profileID: string;
    imageName: string;
    imageExtension: string;
}) {
    return await axios.get(
        'data/profiles/' + profileID + imageName + '.' + imageExtension
    );
}
