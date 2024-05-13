import { useForm } from "react-hook-form";
import "./form.css";
import contactImg from "/img/contact.jpg";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };
  

  return (
    <div className="form-container m-auto">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <img
          src={contactImg}
          alt="Imagen de Contact"
          className="w-1/2 pr-5 border-r-2 border-slate-200 rounded-tl-2xl rounded-bl-2xl hidden md:block"
        />
        <div className="w-full md:w-1/2 flex flex-col justify-around">
          <label className="text-slate-100 font-semibold text-4xl">
            Contacto
          </label>
          <div className="text-md font-semibold flex flex-col gap-1 text-slate-300">
            <a href="tel:+54 9 11-5308-8311">📞 11-5308-8311</a>
            <a href="mailto:obras@zingueriadontorcuato.com">📧 obras@zingueriadontorcuato.com</a>
            <a href="https://maps.app.goo.gl/CRXirRQz7JU6ahxPA">📍 Av. Lib. Gral. San Martín 1695. Don Torcuato, Buenos. Aires.</a>
            <a href="#">⏰ Lun a Vie - 8:00hs a 13:00hs y 14:00hs a 17:00hs</a>
          </div>
          <div className="form-group">
            <label for="name">Nombre</label>
            <input
              required=""
              name="email"
              id="email"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-group">
            <label for="mail">Email</label>
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("mail", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.mail && <span>Este campo es obligatorio.</span>}
          </div>
          <div className="form-group">
            <label for="textarea">¿Cómo podemos ayudarte?</label>
            <textarea
              required=""
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
}
