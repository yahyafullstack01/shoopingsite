// Компонент для отображения сообщения об успешной отправке формы
// Принимает пропс `isVisible` для управления отображением
function SuccessMessage ({ isVisible })  {
    if (!isVisible) return null;
  
    return (
      <div className="absolute top-0 left-0 w-full bg-green-500 text-white py-4 text-center font-bold z-50">
        Thank you! Your form has been successfully submitted!
      </div>
    );
  };
  
  export default SuccessMessage;
  