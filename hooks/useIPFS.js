import { Web3Storage } from 'web3.storage'

const useIPFS = async file => {
    const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3TOKEN })
    const FILE_NAME = file.name
    const FILE_TYPE = file.type
    const FILE_TO_UPLOAD = new File([file], FILE_NAME.split(' ').join(''), {
        type: FILE_TYPE,
    })
    const FILE_HASH = await client.put([FILE_TO_UPLOAD], {
        name: FILE_NAME,
    })
    const imageURI = `https://ipfs.io/ipfs/${FILE_HASH}/${FILE_NAME.split(
        ' '
    ).join('')}`
    return imageURI
}
export default useIPFS
