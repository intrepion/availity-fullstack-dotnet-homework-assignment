using ParenthesesLibrary;

if (args.Length == 0)
{
    Console.WriteLine("usage: ParenthesesConsole <code>");

    return;
}

var code = args[0];

var result = ParenthesesChecker.Check(code);

Console.WriteLine(result);
