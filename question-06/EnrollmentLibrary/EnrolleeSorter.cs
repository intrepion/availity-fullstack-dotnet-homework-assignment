namespace EnrollmentLibrary;

public class EnrolleeSorter
{
    public static List<Enrollee> Sort(List<Enrollee> enrollees)
    {
        return enrollees
            .Select(enrollee => {
                var names = enrollee.Name.Split(" ");
                return new EnrolleeDomain { 
                    Company = enrollee.Company,
                    Id = enrollee.Id,
                    FirstName = names[0],
                    LastName = names[names.Length - 1],
                    Version = enrollee.Version,
                };
            })
            .OrderBy(enrolleeDomain => enrolleeDomain.LastName)
            .ThenBy(enrolleeDomain => enrolleeDomain.FirstName)
            .Select(enrolleeDomain => new Enrollee {
                Company = enrolleeDomain.Company,
                Id = enrolleeDomain.Id,
                Name = enrolleeDomain.FirstName + " " + enrolleeDomain.LastName,
                Version = enrolleeDomain.Version,
            })
            .ToList();
    }
}
