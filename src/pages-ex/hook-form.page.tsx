import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, InputHTMLAttributes, useEffect, forwardRef, useState } from 'react';
import cuid from 'cuid';

import type { FC } from 'react';

// https://react-hook-form.com/get-started
// https://www.daleseo.com/react-hook-form/
// https://github.com/react-hook-form/react-hook-form/tree/master/examples

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  isDirty?: boolean;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  input {
    border: 1px solid ${(props) => props.theme.colorBlue10};
    border-radius: 10px;
    padding: 10px;
  }
`;

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, errorMessage, isDirty, ...props }, ref) => {
  const [id] = useState<string>(cuid());
  return (
    <InputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...props} id={id} ref={ref} aria-invalid={!isDirty ? undefined : errorMessage ? 'true' : 'false'} />
      {errorMessage && <span role="alert">{errorMessage}</span>}
    </InputWrapper>
  );
});
Input.displayName = 'Input';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.theme.colorBlue30};
  height: 50px;
  &:disabled {
    background-color: ${(props) => props.theme.colorGray10};
  }
`;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  margin: 100px auto;

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

interface Inputs {
  email: string;
  password: string;
}

const HookFormPage: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    reset();
  };

  console.log(watch('email'), watch('password'));
  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs-wrapper">
        <Input
          label="?????????"
          type="email"
          placeholder="test@email.com"
          errorMessage={errors.email?.message}
          required
          {...register('email', {
            required: '???????????? ?????? ???????????????.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '????????? ????????? ?????? ????????????.',
            },
          })}
        />
        <Input
          label="????????????"
          type="password"
          placeholder="****************"
          errorMessage={errors.password?.message}
          required
          {...register('password', {
            required: '??????????????? ?????? ???????????????.',
            pattern: {
              value: /\d/,
              message: '???????????? ????????? ?????? ????????????.',
            },
            minLength: {
              value: 8,
              message: '8?????? ?????? ??????????????? ???????????????.',
            },
          })}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} data-testid="login">
        ?????????
      </Button>
    </Form>
  );
};

export default HookFormPage;
