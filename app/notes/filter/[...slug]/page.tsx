import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';
import { NoteTag } from '@/types/note';

type Props = {
  params: Promise<{ slug: [NoteTag | 'all'] }>;
};

export default async function Notes({ params }: Props) {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];

  const queryClient = new QueryClient();

 await queryClient.prefetchQuery({
  queryKey: ['notes', { search: '', page: 1, category }],
  queryFn: () => fetchNotes('', 1, category),
});

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient category={category} />
    </HydrationBoundary>
  );
}
