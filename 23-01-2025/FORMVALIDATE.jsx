import { useForm } from "react-hook-form";
import './FormValidate.css';

const FormValidate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Form submitted successfully. Welcome, ${data.name}!`);
    console.log(data);
  };

  return (
    <div className="form-design">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grp">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* Email Validation */}
        <div className="form-grp">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password Validation */}
        <div className="form-grp">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 4,
                message: 'Password must be at least 4 characters',
              },
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidate;
