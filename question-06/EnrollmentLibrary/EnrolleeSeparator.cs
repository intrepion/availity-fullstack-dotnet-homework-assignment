namespace EnrollmentLibrary;

public class EnrolleeSeparator
{
    public static Dictionary<string, Dictionary<string, Enrollee>> Separate(List<Enrollee> enrollees)
    {
        var separated = new Dictionary<string, Dictionary<string, Enrollee>>();

        foreach (var enrollee in enrollees)
        {
            if (!separated.ContainsKey(enrollee.InsuranceCompany))
            {
                separated.Add(enrollee.InsuranceCompany, new Dictionary<string, Enrollee>());
            }

            if (separated[enrollee.InsuranceCompany].ContainsKey(enrollee.UserId))
            {
                if (separated[enrollee.InsuranceCompany][enrollee.UserId].Version < enrollee.Version)
                {
                    separated[enrollee.InsuranceCompany][enrollee.UserId] = enrollee;
                }
            }
            else
            {
                separated[enrollee.InsuranceCompany].Add(enrollee.UserId, enrollee);
            }
        }

        return separated;
    }
}
