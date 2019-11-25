import md5 from 'md5'

export default function gravatar(email) {
    const BASE_URL = 'https://gravatar.com/avatar/'
    const formatEmail = (email).trim().toLowerCase()
    const hash = md5(formatEmail, { enconding: "binary" })

    return `${BASE_URL}${hash}` 
}