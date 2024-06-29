import React, { useState } from 'react';

interface Moment {
  date: string;
  content: string;
  author: string;
  price: number;
  copies: number;
}

const PostMomentForm: React.FC = () => {
  const [moment, setMoment] = useState<Moment>({
    date: '',
    content: '',
    author: '',
    price: 0,
    copies: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMoment({
      ...moment,
      [name]: name === 'price' || name === 'copies' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(moment);
    // Here you would typically send the data to your server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Date:
          <input type="date" name="date" value={moment.date} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Moment:
          <textarea name="content" value={moment.content} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input type="text" name="author" value={moment.author} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="number" name="price" value={moment.price} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Copies:
          <input type="number" name="copies" value={moment.copies} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Post Moment</button>
    </form>
  );
};

export default PostMomentForm;
