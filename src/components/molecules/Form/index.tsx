import { Fade } from 'react-awesome-reveal';
import { Controller } from 'react-hook-form';
import { Button } from 'src/components/atoms/Button';
import { Title } from 'src/components/atoms/Title';
import Field from 'src/components/templates/Field';
import { RoutesNames } from 'src/constant/routes';
import { useCreateUser } from 'src/hooks/User/useCreateUser';
import { useUserFormData } from 'src/hooks/User/useUserFormData';

export const Form = () => {
  const { USER_CREATE_FIELDS, useUserCreateForm, loadingPosition } =
    useUserFormData();
  const { handleSubmit, success, backToForm } = useCreateUser();

  const renderForm = () => {
    return (
      <form
        className="space-y-[50px] my-[0] mx-[auto] sm:px-[1rem]"
        onSubmit={useUserCreateForm.handleSubmit(handleSubmit)}
      >
        {USER_CREATE_FIELDS.map((item, k) => {
          return (
            <>
              <div key={k}>
                <Controller
                  control={useUserCreateForm.control}
                  name={item.name as any}
                  render={({ field }) => (
                    <Fade direction="up" triggerOnce>
                      <Field
                        field={field as any}
                        placeholder={item.placeholder}
                        name={item.name}
                        type={item.type}
                        errors={useUserCreateForm.formState.errors}
                        options={item.options}
                        title={item.title}
                      />
                    </Fade>
                  )}
                />
              </div>
            </>
          );
        })}

        <div className="flex justify-center">
          <Button title="Sign up" />
        </div>
      </form>
    );
  };

  return (
    <div
      className="container space-y-[3.25rem] flex flex-col items-center justify-center pb-[6.25rem]"
      id={RoutesNames.signUp}
    >
      <Title
        title={
          success ? 'User successfully registered' : 'Working with POST request'
        }
      />
      {success ? (
        <>
          <img width={328} height={290} src="/public/success-form.png" />
          <Button
            className="px-[1rem]"
            title="Back to form"
            action={backToForm}
          />
        </>
      ) : (
        !loadingPosition && renderForm()
      )}
    </div>
  );
};
