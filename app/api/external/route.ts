import {NextResponse} from "next/server"



const External_Api_Url ="https://jsonplaceholder.typicode.com/posts"

export async function GET(){

    try {
       const Respone = await fetch(External_Api_Url)
if(!Respone.ok){
    return NextResponse.json(
        {success:false,masage:"fetch the data from the api ",
        }
    )

}
    const data = await Respone.json()
return NextResponse.json({
    success:true,
    data
})
        
    } catch (error) {
        return NextResponse.json({
            seccess:false ,masage:"get the error",
            error:error
        })

        
    }
}