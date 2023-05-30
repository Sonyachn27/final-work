import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const languageOptions = [
    { value: 'en', label: 'en' },
    { value: 'uk', label: 'uk' },
  ];
  
  const LanguageSelector = () => {
    const { i18n } = useTranslation();
  
    const handleChangeLanguage = (event) => {
      i18n.changeLanguage(event.target.value);
  };
    return (
      <div className='select-wrap'>
      <label htmlFor="lang"></label>
      <select className="custom-select" id="lang" value={i18n.language} onChange={handleChangeLanguage}>
          {languageOptions.map(option => (
              <option key={option.value} value={option.value}>
                  {option.label}
              </option>
          ))}
      </select>
  </div>
   
      
    );

 

  };
  export default LanguageSelector;


   // const handleChangeLanguage = (selectedOption) => {
  //   i18n.changeLanguage(selectedOption.value);
  // };
  // // const GoodSelect = props => <Select {...props} components={{ Control }} />
  // // const Control = ({ children, ...props }) => (
  // //   <components.Control {...props}>
  // //     👍 {children}
  // //   </components.Control>
  // // );
 
  // return (
  //   <Select
  
 
  //     options={languageOptions}
  //     defaultValue={languageOptions.find((option) => option.value === i18n.language)}
  //     onChange={handleChangeLanguage}
  //   />
  // );