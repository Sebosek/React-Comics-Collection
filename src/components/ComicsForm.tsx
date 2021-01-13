import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
  useRef,
} from 'react';
import styled from 'styled-components';
import Validation from './Validation';
import Input from './Input';
import Upload from './Upload';
import Rating from './Rating';
import { PrimaryButton } from './Button';
import { ComicsData } from '../store/types';

interface ComicsFormProps {
  onSave: (data: ComicsData) => void;
  comics?: ComicsData;
}

const Cover = styled.div`
  margin: 22px 12px 52px;
`;

const Field = styled.div`
  margin: 0 32px 32px;
`;

const Center = styled(Field)`
  text-align: center;
  padding-bottom: 40px;
`;

const ComicsForm: FunctionComponent<ComicsFormProps> = ({ comics, onSave }) => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const [series, setSeries] = useState<string | undefined>(undefined);
  const [cover, setCover] = useState<File | undefined>(undefined);
  const [coverUrl, setCoverUrl] = useState<string>('');
  const [rating, setRating] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!comics) return;

    setTitle(comics.title);
    setSeries(comics.series);
    setCover(comics.cover);
    setCoverUrl(URL.createObjectURL(comics.cover));
    setRating(comics.rating);
  }, [comics]);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleTouched(true);
    setTitle(e.target.value);
  };

  const handleChangeCover = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length !== 1) return;

    const file = files[0];
    setCover(file);
    setCoverUrl(URL.createObjectURL(file));
  };

  const handleRemoveCover = () => {
    setCover(undefined);
    setCoverUrl('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      setTitleTouched(true);
      setTitleError(true);
      titleRef?.current?.focus();

      return;
    }

    onSave && onSave({
      title,
      rating,
      series,
      cover,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Cover>
        <Upload
          onChange={handleChangeCover}
          onRemoveCover={handleRemoveCover}
          image={coverUrl}
        >
          <Rating value={rating} onVote={(value) => setRating(value)} />
        </Upload>
      </Cover>
      <Field>
        <Input
          onChange={handleChangeName}
          onBlur={(_) => setTitleTouched(true)}
          defaultValue={comics?.title}
          ref={titleRef}
          label="Comics name"
          error={titleError}
          required
        >
          {(titleTouched && !title) && <Validation>This field is require.</Validation>}
        </Input>
      </Field>
      <Field>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSeries(e.target.value)}
          defaultValue={comics?.series}
          label="Name of series"
        />
      </Field>
      <Center>
        <PrimaryButton size="big" type="submit">Save</PrimaryButton>
      </Center>
    </form>
  );
};

export default ComicsForm;
