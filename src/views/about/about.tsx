import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { useStyles } from './about.styles';

export const About: FC = () => {
  const { root } = useStyles();

  return (
    <FormContainer title="ПРО CAT & DOG">
      <div className={root}>
        <p>Цей інструмент створено для бажаючих допомагати притулку.</p>
        <p>Ви можете отримувати повідомлення про поточний стан справ та потреби.</p>
        <p>Для цього оберіть зручний для себе варіант підписки.</p>
      </div>
    </FormContainer>
  );
};
