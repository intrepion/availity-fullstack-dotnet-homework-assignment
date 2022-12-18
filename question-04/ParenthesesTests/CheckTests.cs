namespace ParenthesesTests;

public class CheckTests
{
    [Theory]
    [InlineData("()", true)]
    public void HappyPath(string code, bool expected)
    {
        // Arrange

        // Act
        var actual = ParenthesesChecker.Check(code);
    }
}
