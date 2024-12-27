// Функция для обработки отправки формы
export const handleFormSubmit = ({
  e, // Событие отправки формы
  setFormSubmitted, // Функция для установки состояния отправки формы
  setSuccessMessageVisible, // Функция для отображения сообщения об успешной отправке
  setProductData, // Функция для сброса данных продукта
  setFormValues, // Функция для сброса значений формы
}) => {
  e.preventDefault(); // Предотвращаем стандартное поведение формы

  setFormSubmitted(true); // Устанавливаем состояние отправки формы
  setSuccessMessageVisible(true); // Показываем сообщение об успешной отправке

  // Сбрасываем данные продукта
  setProductData({
    name: null,
    price: null,
    description: null,
    image: "/4.jpg", 
    color: null,
    size: null,
    quantity: null,
    sku: null,
  });

  // Сбрасываем значения формы
  setFormValues({
    firstName: "", 
    lastName: "", 
    phone: "",
    email: "", 
    message: "", 
  });

  // Таймер для скрытия сообщения об успешной отправке
  setTimeout(() => {
    setFormSubmitted(false); 
    setSuccessMessageVisible(false); 
  }, 8000); 
};

// Функция для обработки изменения значений в форме
export const handleInputChange = (e, setFormValues) => {
  const { name, value } = e.target; // Получаем имя и значение изменённого поля
  setFormValues((prevValues) => ({
    ...prevValues, 
    [name]: value, 
  }));
};
