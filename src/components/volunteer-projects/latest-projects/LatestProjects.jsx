import './LatestProjects.css'

function Cardd({post,imag}) {
    return(
        <div className='card-latest-projects'>
            <img className='img-latest-projects' alt=''
             src={imag}/>
            <div className='latest-projects-text'>{post}</div>
        </div>
    )
}

function LatestProjects() {
    const posts = [
        {
            post:'منشور تصميم  Ui UX للتطبيقات و المواقع الالكتروني للتطبيقات و المواقع الالكترونية.',
            imag:'/images/5.jpg'
        },
        {
            post:'منشور تصميم  Ui UX للتطبيقات و المواقع الالكتروني للتطبيقات و المواقع الالكترونية و المواقع الالكتروني للتطبيقات و المواقع الالكترونية.',
            imag:'/images/5.jpg'
        },
        {
            post:'منشور تصميم  Ui UX للتطبيقات و المواقع الالكتروني للتطبيقات و المواقع الالكترونية.',
            imag:'/images/5.jpg'
        }
    ]
   return(
    <div className='latest-projects'>
        <div className='title-latest-projects'>
            احدث المشاريع
        </div>
        {posts.map((p,index)=>{
            return <div key={index}>
                <Cardd  post={p.post} imag={p.imag}/>
                {/* <div className='latest-projects-divider'/> */}
            </div>
        })}
      
    </div>
   )
}

export default LatestProjects;

