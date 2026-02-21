import './Guide.css'

function Guide({data,title}) {
   function FormattedText({ text, className = "" }) {
  // إذا كان النص يحتوي على \n، نعرضه مع الأسطر
  if (text.includes('\n')) {
    return (
      <div className={className}>
        {text.split('\n').map((line, index) => {
          // إذا كان السطر فارغاً، نعرض مسافة
          if (line.trim() === '') {
            return <br key={index} />;
          }
          // إذا بدأ السطر برموز القوائم
          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return (
              <div key={index} style={{ paddingRight: '20px' }}>
                {line}
              </div>
            );
          }
          return (
            <p key={index} className="justified-paragraph">
              {line}
            </p>
          );
        })}
      </div>
    );
  }
  
  // إذا لم يكن هناك \n، نعرض النص عادي
  return <p className={`justified-paragraph ${className}`}>{text}</p>;
}

  return(
    <div>
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className='layout-Guide'>
        {data.map((d) => 
           <div key={d.id} className='layout2-Guide'>
             <div className="title-wrapper">
               <h3>{d.title}</h3>
               <div className="dividing_line" style={{width: '100%'}} />
             </div>
             <FormattedText text={d.content} />
             <div className='dividing' /> 
           </div>
        )}
      </div>
    </div>
  )   
}

export default Guide