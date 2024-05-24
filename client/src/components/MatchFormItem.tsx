import { MatchPredictionSchema } from "@/schema";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { teamImages } from "@/utils/teamImages";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// Typ dla schematu walidacji
type MatchPredictionType = z.infer<typeof MatchPredictionSchema>;

// Typ dla danych meczowych
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

// Typ dla propsów komponentu MatchFormItem
interface MatchFormItemProps {
  form: UseFormReturn<MatchPredictionType>;
  match: Match;
  idx: number;
}

export default function MatchFormItem({ form, match }: MatchFormItemProps) {
  return (
    <div
      key={match.matchId}
      className='!w-full sm:w-1/2 bg-white p-4 rounded-lg border-2 border-[#DBDFE0] flex-shrink-0'
    >
      <h3 className='text-[#B6C1C5] text-sm'>Grupa {match.group}</h3>
      <div className='flex flex-col items-center justify-between'>
        <FormField
          control={form.control}
          name={`matchesData.${match.matchId}.homeScore`}
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
                  value={field.value ?? ""}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`matchesData.${match.matchId}.awayScore`}
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
                  value={field.value ?? ""}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
