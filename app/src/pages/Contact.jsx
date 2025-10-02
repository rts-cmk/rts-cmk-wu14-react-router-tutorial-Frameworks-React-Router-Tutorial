import { useNavigate } from "react-router";

export default function Contact() {
  let navigateHome = useNavigate();

  return (
    <>
      <h2>Kontakt</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti optio
        reiciendis minus nisi aliquam illo ratione omnis ipsum unde! Facere
        corporis quibusdam facilis culpa nam recusandae maiores nostrum
        perspiciatis iste omnis illum explicabo natus quo ratione placeat earum,
        consequuntur vel pariatur. Ad nesciunt, natus ea consequuntur
        consequatur quidem soluta molestias?
      </p>
      <form className="contact-form">
        <label htmlFor="name">Navn:</label>
        <input type="text" name="name"  />
        <label htmlFor="name">Email:</label>
        <input type="email" name="" id="" />
        <label htmlFor="besked">Besked</label>
        <textarea name="besked" id=""></textarea>

        <button
          onClick={() => {
            navigateHome("/");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
}
