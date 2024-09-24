
const Form = ({ title, fields, children }) => {

  
    const renderFields = () => {
      return fields.map((field, index) => {
        switch (field.type) {
          case 'text':
            return (
              <div key={index}>
                <label>{field.label}: </label>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            );
          case 'select':
            return (
              <div key={index}>
                <label>{field.label}: </label>
                <select name={field.name}>
                  {field.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          default:
            return null;
        }
      });
    };
  
    return (
      <form>
        <h2>{title}</h2>
        {renderFields()}
        {children}
      </form>
    );
  };
  
  export default Form;