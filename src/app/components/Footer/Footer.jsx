import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-700">
      <h1>@2025, All Rights Reserved</h1>
      <ul className="flex gap-5">
        <li><Image width={20} height={20} src="/1.png" alt="facebook" /></li>
        <li><Image width={20} height={20} src="/2.png" alt="instagram" /></li>
        <li><Image width={20} height={20} src="/3.png" alt="twitter" /></li>
        <li><Image width={20} height={20} src="/4.png" alt="youtube" /></li>
      </ul>
    </footer>
  )
}

export default Footer
