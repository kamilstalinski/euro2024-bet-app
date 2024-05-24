import { MatchPredictionSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
// import MatchFormItem from "./MatchFormItem";
import { teamImages } from "@/utils/teamImages";
import { Form, FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Input } from "./ui/input";

interface Match {
  _id: string;
  matchId: number;
  homeTeam: string;
  awayTeam: string;
  group: string;
  homeScore: number;
  awayScore: number;
  __v: number;
}

interface MatchesFormProps {
  matchesData: Match[];
}

export default function MatchesForm({ matchesData }: MatchesFormProps) {
  const form = useForm({
    resolver: zodResolver(MatchPredictionSchema),
    defaultValues: {
      matches: matchesData.map((match) => ({
        matchId: match.matchId,
        homeScore: match.homeScore,
        awayScore: match.awayScore,
      })),
    },
  });

  const onSubmit = async (data: z.infer<typeof MatchPredictionSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className='grid gap-4 grid-cols-2'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {matchesData.map((match, idx) => (
            // <MatchFormItem
            //   form={form}
            //   match={match}
            //   idx={idx}
            //   key={match._id}
            // />
            <div
              key={match.matchId}
              className='!w-full sm:w-1/2 bg-white p-4 rounded-lg border-2 border-[#DBDFE0] flex-shrink-0'
            >
              <h3 className='text-[#B6C1C5] text-sm'>Grupa {match.group}</h3>
              <div className='flex flex-col items-center justify-between'>
                <FormField
                  control={form.control}
                  name={`matches.${idx}.homeScore`}
                  render={({ field }) => (
                    <FormItem className='w-full flex items-center justify-between'>
                      <FormLabel>
                        <div className='flex items-center space-x-2'>
                          <img
                            src={teamImages[match.homeTeam]}
                            alt={match.homeTeam}
                            className='w-[30px] min-w-[30px] rounded-full overflow-hidden border-2 border-[#DBDFE0]'
                          />
                          <h2>{match.homeTeam}</h2>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='w-[50px] h-auto text-center !mt-0'
                          {...field}
                          type='number'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`matches.${idx}.awayScore`}
                  render={({ field }) => (
                    <FormItem className='w-full flex items-center justify-between mt-2'>
                      <FormLabel>
                        <div className='w-full flex items-center space-x-2'>
                          <img
                            src={teamImages[match.awayTeam]}
                            alt={match.awayTeam}
                            className='w-[30px] min-w-[30px] rounded-full overflow-hidden border-2 border-[#DBDFE0]'
                          />
                          <h2>{match.awayTeam}</h2>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='w-[50px] h-auto text-center !mt-0'
                          {...field}
                          type='number'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}
          <Button type='submit'>Wyślij</Button>
        </form>
      </Form>
    </div>
  );
}
