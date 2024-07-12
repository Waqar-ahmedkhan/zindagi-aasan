import Image from 'next/image';
import ReactWhatsapp from 'react-whatsapp';

function Whatsapp() {
  return (
    <div className=" fixed bottom-12 right-16">
      <div className="whatsapp-button">
        <ReactWhatsapp 
          element="button"
          number="1-212-736-5000" 
          message="Hello World!!!"
          className="flex items-center"
        >
          <Image
            alt="WhatsApp"
            src="/whatsapp_logo.png"
            width={55}
            height={45}
            className="transition-transform duration-300 w-auto h-auto ease-in-out transform hover:scale-110"
          />
        </ReactWhatsapp>
      </div>
    </div>
  );
}

export default Whatsapp;
