import Image from 'next/image'

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

  return (
   
      <span className="underline">{name}</span>
  

  //   <div className="flex items-center">
  //   <div className="w-12 h-12 relative mr-4">
  //     <Image
  //       src={author.node.avatar.url}
  //       layout="fill"
  //       className="rounded-full"
  //       alt={name}
  //     />
  //   </div>
  //   <div className="">{name}</div>
  // </div>
  )
}
