import { z } from 'zod';

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ProductFormSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().max(500),
  price: z.number().min(0).max(1000000),
  quantity: z.number().optional().default(0),
  image: z.string().optional(),
});

export function ProductForm({ placeholder, onSubmit }) {
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: placeholder,
  });

  const handleSubmit = (data) => {
    console.log(data);
    console.log(form.errors);
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit, (errors) =>
        console.log(errors)
      )}
    >
      <Stack spacing={2}>
        <FormControl>
          <TextField
            label='Name'
            variant='outlined'
            {...form.register('name')}
            error={Boolean(form.formState.errors.name)}
          />
          {form.formState.errors?.name && (
            <Typography color='error'>
              {form.formState.errors.name.message}
            </Typography>
          )}
        </FormControl>
        <FormControl>
          <TextField
            label='Description'
            variant='outlined'
            multiline
            maxRows={5}
            {...form.register('description')}
            error={Boolean(form.formState.errors.description)}
          />
          {form.formState.errors?.description && (
            <Typography color='error'>
              {form.formState.errors.description.message}
            </Typography>
          )}
        </FormControl>

        <FormControl>
          <TextField
            label='Price'
            variant='outlined'
            type='number'
            required
            {...form.register('price')}
            error={Boolean(form.formState.errors.price)}
          />
          {form.formState.errors?.price && (
            <Typography color='error'>
              {form.formState.errors.price.message}
            </Typography>
          )}
        </FormControl>

        <FormControl>
          <TextField
            label='Quantity'
            variant='outlined'
            type='number'
            {...form.register('quantity')}
            error={Boolean(form.formState.errors.quantity)}
          />
          {form.formState.errors?.quantity && (
            <Typography color='error'>
              {form.formState.errors.quantity.message}
            </Typography>
          )}
        </FormControl>
        <FormControl>
          <TextField
            label='Image URL'
            variant='outlined'
            type='url'
            {...form.register('image')}
            error={Boolean(form.formState.errors.image)}
          />
          {form.formState.errors?.image && (
            <Typography color='error'>
              {form.formState.errors.image.message}
            </Typography>
          )}
        </FormControl>

        <Box display='flex' justifyContent='flex-end' gap={2}>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
          <Button variant='outlined' type='reset' color='error'>
            Reset
          </Button>
        </Box>
      </Stack>
    </form>
  );
}
