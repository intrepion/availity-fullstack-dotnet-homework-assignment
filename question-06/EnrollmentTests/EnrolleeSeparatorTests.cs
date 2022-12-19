using EnrollmentLibrary;

namespace EnrollmentTests;

public class EnrolleeSeparatorTests
{
    [Theory]
    [InlineData("Some Company", "1", 1, "Another Company", "1", 1, 1)]
    [InlineData("Some Company", "1", 1, "Some Company", "1", 2, 1)]
    [InlineData("Some Company", "1", 1, "Some Company", "2", 1, 2)]
    public void EnrolleeSeparatorTest(string company1, string id1, int version1, string company2, string id2, int version2, int expected)
    {
        var enrollees = new List<Enrollee>
        {
            new Enrollee {
                FirstAndLastName = "Alice Bob",
                InsuranceCompany = company1,
                UserId = id1,
                Version = version1,
            },
            new Enrollee {
                FirstAndLastName = "Bob Alice",
                InsuranceCompany = company2,
                UserId = id2,
                Version = version2,
            }
        };

        var separated = EnrolleeSeparator.Separate(enrollees);
        var actual = separated[company1].Count;

        Assert.Equal(expected, actual);
    }
}
