import { useForm } from "react-hook-form";
import ShinyText from "./ShinyText";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";
import { useContext } from "react";

const Create = () => {
  const [todos, settodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const change = (data) => {
    data.isCompleted = false;
    data.id = nanoid();

    let copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    toast.success("Todo Created!");

    reset();
  };

  return (
    <div className="text-white w-full md:w-[60%] p-4 sm:p-6 md:p-10">
      <ShinyText
        text="Create Tasks"
        speed={2}
        delay={0}
        color="#8EC5FF"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
        className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-5 font-bold"
      />
      <form onSubmit={handleSubmit(change)}>
        <input
          className="p-2 border-b w-full text-lg sm:text-xl md:text-2xl font-thin outline-0 bg-transparent"
          {...register("title", { required: "titile can not be empty" })}
          type="text"
          placeholder="Title"
        />
        {errors && errors.title && errors.title.message && (
          <small className="font-thin text-red-400 block mt-1">
            {errors.title.message}
          </small>
        )}

        <button className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-2 border rounded cursor-pointer w-full sm:w-auto hover:bg-white hover:text-gray-900 transition-colors">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;