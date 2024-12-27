// Хук для управления состоянием заголовка
// Этот хук объединяет логику работы с языком приложения, состоянием меню и элементами меню.
import { useState } from "react";
import { useLanguage } from "../Functions/useLanguage";

export function useHeaderState() {
  // Подключаем хук для управления языком
  const { language, setLanguage, translateList } = useLanguage();

  // Состояние для управления открытием/закрытием меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Переводим элементы меню, используя текущий язык
  const menuItems = translateList("home", "header") || [];

  // Переключение языка приложения
  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "FR" : "EN"; // Меняем язык на противоположный
    setLanguage(newLanguage); // Устанавливаем новый язык
    localStorage.setItem("appLanguage", newLanguage); // Сохраняем выбранный язык в локальном хранилище
  };

  // Переключение состояния меню (открыть/закрыть)
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Закрытие меню
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Возвращаем все состояния и функции для управления заголовком
  return {
    language, // Текущий язык
    menuItems, // Элементы меню
    isMenuOpen, // Состояние меню
    toggleLanguage, // Функция для переключения языка
    toggleMenu, // Функция для переключения состояния меню
    closeMenu, // Функция для закрытия меню
  };
}
