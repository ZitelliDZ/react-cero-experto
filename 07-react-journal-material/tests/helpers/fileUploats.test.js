import { fileUpload } from "../../src/helpers/fileUpload"

import {Cloudinary} from "@cloudinary/url-gen"; 
    
import {v2 as cloudinary} from 'cloudinary';
        

describe('File Uploads', () => {
      
cloudinary.config({ 
  cloud_name: 'dqbtje6r9', 
  api_key: '686726841532287', 
  api_secret: 'u_zipOE8sDFWKKHCcxmtPLLjL8w' ,
  secure: true
});
 
     
    
    test('debe de subir el archivo correctamente', async () => {
        const imageUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
        
        const resp = await fetch( imageUrl )
        const blob = await resp.blob()
        const file = new File([blob], 'foto.png')

        const url = await fileUpload( imageUrl )
        expect( typeof url ).toBe('string')

        // Borrar imagen por ID
        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.png','')

        const res = await cloudinary.api.delete_resources(['journal/'+imageId]);
  
    
      })

    test('debe de retornar un null', async () => {
        const file = new File([], 'foto.png')
        const url = await fileUpload( file )
        expect( url ).toBe(null)
    })


} )