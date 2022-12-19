namespace EnrollmentLibrary;

public class EnrolleeSorter
{
    public static List<Enrollee> Sort(List<Enrollee> enrollees)
    {
        return enrollees
            .Select(enrollee => {
                var names = enrollee.FirstAndLastName.Split(" ");
                return new EnrolleeDomain { 
                    Company = enrollee.InsuranceCompany,
                    FirstName = names[0],
                    Id = enrollee.UserId,
                    LastName = names[names.Length - 1],
                    Version = enrollee.Version,
                };
            })
            .OrderBy(enrolleeDomain => enrolleeDomain.LastName)
            .ThenBy(enrolleeDomain => enrolleeDomain.FirstName)
            .Select(enrolleeDomain => new Enrollee {
                FirstAndLastName = enrolleeDomain.FirstName + " " + enrolleeDomain.LastName,
                InsuranceCompany = enrolleeDomain.Company,
                UserId = enrolleeDomain.Id,
                Version = enrolleeDomain.Version,
            })
            .ToList();
    }
}
