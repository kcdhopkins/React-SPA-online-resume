
function loadTemplate(arrayOfObjs, template){
    return arrayOfObjs.map( (text, index) => {
        return(
          <div key={index} className="card mb-3 mt-3 shadow">
              <div className="card-body">
                <h5 className="card-title">{text.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {text.addressdate}
                </h6>
                <p className="card-text">
                  {text.studied}
                </p>
              </div>
          </div>
        )
      });
}

export default loadTemplate;