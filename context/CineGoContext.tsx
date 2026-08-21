import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Plan = { id: string; movieId: string; person: string; time: string; cinema: string; status: 'Pending' | 'Accepted' };
type ContextValue = { interested: string[]; plans: Plan[]; toggleInterest: (id: string) => void; addPlan: (plan: Plan) => void };
const CineGoContext = createContext<ContextValue | null>(null);

export function CineGoProvider({ children }: { children: React.ReactNode }) {
  const [interested, setInterested] = useState<string[]>(['last-signal-6:45 PM']);
  const [plans, setPlans] = useState<Plan[]>([]);
  useEffect(() => { AsyncStorage.getItem('cinego-state').then(raw => { if (raw) { const parsed = JSON.parse(raw); setInterested(parsed.interested ?? []); setPlans(parsed.plans ?? []); } }); }, []);
  useEffect(() => { AsyncStorage.setItem('cinego-state', JSON.stringify({ interested, plans })); }, [interested, plans]);
  const value = useMemo(() => ({
    interested,
    plans,
    toggleInterest: (id: string) => setInterested(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]),
    addPlan: (plan: Plan) => setPlans(current => [...current, plan]),
  }), [interested, plans]);
  return <CineGoContext.Provider value={value}>{children}</CineGoContext.Provider>;
}
export function useCineGo() { const value = useContext(CineGoContext); if (!value) throw new Error('useCineGo must be used inside CineGoProvider'); return value; }