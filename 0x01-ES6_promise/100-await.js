import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto('filename.jpg'); // Replace with actual filename
    const userResponse = await createUser('Guillaume', 'Salva'); // Replace with actual user details

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
